import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const NEW_NOTE = gql`
    mutation createNote($title: String! $content: String!) {
        createNote( input: {title: $title, content: $content}) {
            _id
            title
            content
            date
        }
    }
`

const NOTES_QUERY = gql`
    {
        allNotes {
            title
            content
            _id
            date
        }
    }
`

const NewNote = withRouter(({history}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [createNote] = useMutation(NEW_NOTE, {
        update(
            cache,
            {
                data: {createNote}
            }
        ) {
            const { allNotes } = cache.readQuery({ query: NOTES_QUERY });
            cache.writeQuery({
                query: NOTES_QUERY,
                data: {allNotes: allNotes.concat([createNote])}
            });
        }
    });

    return (
        <div className="container m-t-20">
            <h1 className="page-title">New Note</h1>
            <div className="newnote-page m-t-20">
                <form onSubmit={e=> {
                    e.preventDefault();
                    createNote({
                        variables: {
                            title,
                            content,
                            date: Date.now()
                        }
                    });
                    history.push("/");
                }}>
                    <div className="field">
                        <label className="label">Note Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Note Tite" value={title} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Note Content</label>
                        <div class="contol">
                            <textarea class="textarea" rows="10" placeholder="Note Content here..." value={content} onChange={e => setContent(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is=link">Submit</button>
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    )
});
export default NewNote;
