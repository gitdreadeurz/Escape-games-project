function Button({ text, variant = 'primary', type = 'button', onClick }) {
    const className = `btn btn-${variant}`;
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;