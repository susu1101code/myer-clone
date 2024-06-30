// components/DeliveryIcon.js
import React from 'react';
import styles from '../HeaderTop.module.css'
const DeliveryIcon = () => (
    <svg viewBox="0 0 24 24" className={styles['header-top__svg']}
         data-automation="tile-master-c-icon" data-metatip="true"
         style={{ height: '26px', transform: 'translate(0px, 0px)' }}
         data-selected="true" data-label-id="0">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g stroke="currentColor">
                <rect vectorEffect="non-scaling-stroke" x="0.5" y="3.5" width="15" height="16"></rect>
                <path vectorEffect="non-scaling-stroke"
                      d="M15.5,6.5 L15.5,19.5 L23.5,19.5 L23.5,12.1426602 L19.9947111,6.5 L15.5,6.5 Z"></path>
                <path vectorEffect="non-scaling-stroke"
                      d="M3,20 C3,21.1045695 3.8954305,22 5,22 C6.1045695,22 7,21.1045695 7,20"></path>
                <path vectorEffect="non-scaling-stroke"
                      d="M16,20 C16,21.1045695 16.8954305,22 18,22 C19.1045695,22 20,21.1045695 20,20"></path>
            </g>
        </g>
    </svg>
);

export default DeliveryIcon;
