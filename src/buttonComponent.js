import './button.css';

export default function Button(props) {
    let stylesString = 'default';
    if (props.color || props.variant) stylesString = '';
    if (!props.disableShadow) stylesString +=' shadow';

    return (
        <button className={stylesString}>Default</button>
    )
}