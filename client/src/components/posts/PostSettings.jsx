import React from 'react';
import './css/PostSettings.css';

function PostSettings({deletePost}){
    const editPost = () => {
        document.getElementById('open-edit').click();
    }

    return (
        <div>
            <div className='post-settings'>
                <i className='fa fa-ellipsis-h'></i>

                <div className='dropdown-content'>
                    <section>
                            <div className='option' onClick={deletePost}>
                                <i className ='fas fa-trash-alt'></i>
                                <span>Delete Post</span>
                            </div>

                            <div className='option' onClick={editPost}>
                                <i className='fas fa-edit'></i>
                                <span>Edit Post</span>
                            </div>
                    </section>
                </div>
            </div>
        </div>
    )  
}

export default PostSettings;