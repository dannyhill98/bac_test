import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../css/tracking.style.css';
import { formatTime, formatDate } from './util/date.util';

function TrackingView() {

    const [tracking_number, setTracking_number] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [tracking_info, setTracking_info] = useState({});

    useEffect(() => {
        if (searchParams.has('tracking_number')) {
            setTracking_number(searchParams.get('tracking_number'));
            fetchInfo(searchParams.get('tracking_number'));
        }
    }, []);

    const handleInput = (event) => {
        setTracking_number(event.target.value);
        searchParams.set('tracking_number', event.target.value);
        if (event.target.value == "") searchParams.delete('tracking_number');
        setSearchParams(searchParams);
    }

    const handleSubmit = async (event) => {
        event?.preventDefault();
        fetchInfo(tracking_number);
    }

    const fetchInfo = async (tracking_number_fetch) => {

        fetch(import.meta.env.VITE_API_URL + "Tracking_parcel?" + new URLSearchParams({ tracking_number: tracking_number_fetch }), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (!data.message) {
                    setTracking_info(data)
                    console.log(data);
                } else {
                    setTracking_info({})
                }
            })
            .catch((error) => {
                setTracking_info({})
            });
    }

    return (
        <>
            <div className="tracking-container">
                <form className="tracking-form">
                    <div className="tracking-input-container">
                        <label className="tracking-input-label" htmlFor="tracking_input">Enter your tracking number</label>
                        <input defaultValue={tracking_number} className="tracking-input" id="tracking_input" type="text" placeholder="Enter your tracking number" onInput={handleInput} />
                    </div>
                    <div className="tracking-button-container">
                        <button className="tracking-button" onClick={handleSubmit} >Search</button>
                    </div>
                </form>
                <div className="tracking-info">
                    {tracking_info?.status &&
                        <>
                            <div className="tracking-numbers">
                                <div className="tracking-number" onClick={() => navigator.clipboard.writeText(tracking_info?.label?.tracking_number)}>
                                    {tracking_info?.label?.tracking_number}
                                </div>
                                <div className="tracking-number" onClick={() => navigator.clipboard.writeText(tracking_info?.label?.external_tracking_number)}>
                                    {tracking_info?.label?.external_tracking_number}
                                </div>
                            </div>
                            <div className="tracking-items-container">
                                {tracking_info?.parcel_tracking_items?.map((item, index) => {
                                    return <Tracking_Item status={(index == 0 && tracking_info?.status == "delivered") ? "delivered" : (index == tracking_info?.parcel_tracking_items?.length - 1) ? "created" : "step"}
                                        item={item} key={item?.id} />
                                })}
                            </div>
                        </>
                    }
                    {!tracking_info?.status &&
                        <div className="tracking-item-error">
                            <p>Tracking Number Does Not Exist.</p>
                            <p>Please contact us if you have any doubt</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

function Tracking_Item(props) {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date(props?.item?.timestamp);

    return (
        <>
            {
                <div className="tracking-item">
                    <div className="tracking-item-date-time">
                        <div className="tracking-item-date">{formatDate(date)}</div>
                        <div className="tracking-item-time">{formatTime(date)}</div>
                    </div>
                    <div className="step-line">
                        <div className={props?.status}>
                        </div>
                        { props?.status != "created" && <div className="vertical-line">
                        </div>}
                    </div>
                    <div className="tracking-item-description">
                        <div className="tracking-item-info">{props?.item?.tracking_code?.tracking_code_locales[0]?.description ??
                            props?.item?.tracking_code_vendor?.tracking_code?.tracking_code_locales[0]?.description}</div>
                        <div className="tracking-item-location">{props?.item?.location ? props?.item?.location + ", " : ""}
                            {props?.item?.city ? props?.item?.city + ", " : ""}
                            {props?.item?.state ? props?.item?.state + ", " : ""}
                            {props?.item?.country?.isoCode}
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default TrackingView;