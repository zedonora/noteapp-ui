import React from "react";
const NewNote = () => {
    return (
        <div className="container m-t-20">
            <h1 className="page-title">New Note</h1>
            <div className="newnote-page m-t-20">
                <form>
                    <div className="field">
                        <label className="label">Note Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Note Tite" />
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Note Content</label>
                        <div class="contol">
                            <textarea class="textarea" rows="10" placeholder="Note Content here..."></textarea>
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
}
export default NewNote;
