import React from "react";
import './styles/item.css'
export default function ExperienceItem(props){
    const _data = props.data;
    const containerStyle = {
        // maxWidth: '600px',
        width: '100em',
        // 'min-width': '2em',
        height: 'auto',
        // margin: '1rem auto',
        padding: '1rem',
        backgroundColor: 'transparent',
        borderRadius: '2rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        textAlign: 'left',
      };
    
      const headingStyle = {
        fontSize: '2em',
        color: '#333',
      };
    
      const paragraphStyle = {
        fontSize: '1em',
        lineHeight: '2',
        color: '#555',
      };
    return (
        <div className="container" style={containerStyle}>
            <h1 style={headingStyle}>{_data.institution}</h1>
            <p style={paragraphStyle}>{_data.designation}</p>
            <p style={paragraphStyle}>{_data.date}</p>
            <ul className="item-ul">
                {_data.description.map((course, index)=>(
                    <li className="item-li"><p style={paragraphStyle}>{course}</p></li>
                ))}
            </ul>
        </div>
    )
}