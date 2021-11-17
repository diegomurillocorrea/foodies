const Input = ({ containerClasses, id, label, name, type, classes, onChange, placeholder }) => {
    return (
        <div className={containerClasses}>
            <div>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <div>
                <input
                    id={id}
                    name={name}
                    type={type}
                    className={classes}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Input;