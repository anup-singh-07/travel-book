import React, { Fragment } from 'react';
import * as photos from '../../../assets/index.js';
import ImageDisplay from '../../ImageDiplay/ImageDisplay.js';
import './SummaryImage.css';

const summaryImage = props => {
    let photo = (placeName, price, duration) => {
        switch (placeName) {
            case 'mumbai':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.mumbai}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'maldives':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.maldives}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'daman':
                return (
                    <div>
                        <ImageDisplay
                            className='images'
                            src={photos.daman}
                            style={{ top: '40%' }}
                            h1={<Fragment>Daman<br />&<br />Diu</Fragment>}
                            h2={'Rs. ' + price + '/-'}
                            h3={duration} />
                    </div>
                )
            case 'goa':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.goa}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'chennai':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.chennai}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'laksha':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.laksha}
                        h1='LAKSHADWEEP'
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'puri':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.puri}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'gokarna':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.gokarna}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'andaman':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.andaman}
                        style={{ top: '40%' }}
                        h1={<Fragment>ANDAMAN <br />&<br />NICOBAR</Fragment>}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'manali':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.manali}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'mussoorie':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.mussoorie}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'gangtok':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.gangtok}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'tawang':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.tawang}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'chamba':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.chamba}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'leh':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.leh}
                        h1={<Fragment>Leh <br />Ladakh</Fragment>}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'gulmarg':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.gulmarg}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'shillong':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.shillong}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            case 'darjeeling':
                return (
                    <ImageDisplay
                        className='images'
                        src={photos.darjeeling}
                        h1={placeName.toUpperCase()}
                        h2={'Rs. ' + price + '/-'}
                        h3={duration} />
                )
            default: return null
        }
    };
    return (
        <React.Fragment>
            {/* <h2>This was summary Image</h2> */}
            {photo(props.pics, props.price, props.duration)}
            {/* <h2 className='centerd'>Mumbai</h2> */}
        </React.Fragment>
    );
}

export default summaryImage;