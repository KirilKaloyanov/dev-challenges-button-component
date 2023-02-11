import './button.css';

export default function Button(props) {
    let stylesString = 'default';
    if (props.color || props.variant) stylesString = '';
    
    if (props.variant === 'outline') stylesString += 'outline';
    if (props.variant === 'text') stylesString += 'text';
    
    if (props.color === 'Default') stylesString += 'default';
    if (props.color === 'Primary') stylesString += 'primary';
    if (props.color === 'Secondary') stylesString += 'secondary';
    if (props.color === 'Danger') stylesString += 'danger';
    
    if (props.size === 'sm') stylesString += ' sm';
    if (props.size === 'lg') stylesString += ' lg';

    if (!(props.disableShadow || props.variant === 'text')) stylesString +=' shadow';

    if (props.disabled) stylesString += ' disabled'

    return (
        <button className={stylesString} disabled={props.disabled}>
            {props.label} &nbsp;
            <span class="material-icons">
                add_shopping_cart
            </span>
        </button>
    )
}