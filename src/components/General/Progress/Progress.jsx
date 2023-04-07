import SVG from 'react-inlinesvg'
import './Progress.css'

export default function CircularIndeterminate() {
  
    return (
      <div className='spinner-container'>
        <div className='spinner'>
            <SVG 
                src={'./Icons/construction-tools.svg'}
                alt={'spinner'}
            />
        </div>
      </div>
    );
  }

export {CircularIndeterminate};