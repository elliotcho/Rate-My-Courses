import React, {Component} from 'react';

class EditModal extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='edit-modal modal fade' id='edit' data-backdrop='false'>
                <div className ='modal-dialog modal-dialog-centered'>
                    <div className ='modal-content'>
                        <div className ='modal-header'>
                       
                        <button id='close-edit' className='close' data-dismiss='modal'>
                            <span>&times;</span>
                        </button>
                    </div>

                        <div className ='modal-body'>
                            <textarea/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default EditModal;