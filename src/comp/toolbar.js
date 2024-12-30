// toolbar.js
import react from 'react';

import { DraggableNode } from './draggablenode';

export const PipelineToolbar = () => {
 
    return (
        <div style={{ padding: '10px' }} className='toolbar'>
            <p>Components</p>
            <h6>Drag and Drop</h6>
                <DraggableNode type='customInput' label='Input' inputs='0' outputs='1' inputType='text' />
                <DraggableNode type='LLM' label='LLM Engine' inputs='1' outputs='1' inputType='text'  /> 
                <DraggableNode type='customOutput' label='Output' inputs='1' outputs='0' inputType='text'  />
                {/* <DraggableNode type='ask' label='Ask queiexs' inputs='2' outputs='1' inputType='text' /> */}

            
        </div>
    );
};
