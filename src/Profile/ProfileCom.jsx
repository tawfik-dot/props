import React from "react";
import PropTypes from "prop-types";

const ProfileComp = (props) => {
    return (
        <div>
            <h1> My name is{props.name}</h1>
            <h2>Profession : {props.profession}</h2>
            <h3>Bio: {props.bio}</h3>
            <button onClick={() => props.handlename(props.name)}>
                 {""} Show
            </button>
            <p>{props.children}</p>
        </div>
    );
};

export default ProfileComp;

ProfileComp.defaultProps = {
    name: "#######",
    bio: "i'm a robot",
    profession: "IT ",
};

ProfileComp.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
};