import React from 'react';
import PropTypes from 'prop-types'

const ChildCpn1 = (props) => {
    const {name, age, height} = props;

    return (
        <div>
            <h2>测试参数propTypes类型检测,目前需要单独使用prop-types库</h2>
            This is ChildCpn1 component.
            my name is {name}, age:{age}, height: {height}
        </div>
    );
};
ChildCpn1.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number
}
ChildCpn1.defaultProps={
    name: "coder",
    age: 34,
    height: 1.88
}
export default ChildCpn1;
