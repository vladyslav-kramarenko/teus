import React from 'react';
import './ModalMessage.css';
// import {useIntl} from "react-intl";

interface ModalMessageProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

const ModalMessage: React.FC<ModalMessageProps> = ({ isOpen, message, onClose }) => {
    // const intl = useIntl();
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-body" onClick={e => e.stopPropagation()}>
                <h1>{message}</h1>
                <button className={"action-button"} onClick={onClose}>
                    Close
                    {/*{intl.formatMessage({id: 'closeModal'})}*/}
                </button>
            </div>
        </div>
    );
};

export default ModalMessage;
