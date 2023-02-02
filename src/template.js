import React, { useEffect, useState } from 'react';
import './styles.css';

import { Row, Col } from 'antd';
import * as Icons from '@ant-design/icons';
import shortid from 'shortid';

const { hasOwnProperty } = Object.prototype;

export default function CustomerHeaderComponent(props) {
    const { component, children, data } = props;
    const { params } = component;
    const { categories } = data?.data?.ebbShutdownData;

    const childComponent = React.Children.map(children, (child) => {
        if (children !== false) {
            return React.cloneElement(child, {
                parentProps: props,
            });
        }
        return null;
    });

    const newWelcomeMessage = categories?.find(
        ({ name }) => name === 'welcomeMessage'
    );

    // String conversion is weird...
    // 'true' == true     returns false
    // Boolean('false')   returns true
    // Use this helper function
    const checkBooleanString = (str) =>
        str === 'true' || (str === 'false' ? false : str);

    const WifiIcon = Icons['WifiOutlined'];
    return (
        <Row className=" w-100 customer-header-layout">
            <div className="flex-row w-auto">{childComponent}</div>
            {newWelcomeMessage &&
            checkBooleanString(newWelcomeMessage.enable) ? (
                <Col xxl={{ span: 12 }} xs={{ span: 24 }}>
                    <div className="warning-container yellow-background">
                        {newWelcomeMessage.message}
                    </div>
                </Col>
            ) : null}
        </Row>
    );
}
