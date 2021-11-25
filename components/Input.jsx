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
                    className={`${classes} 
                                focus:outline-none 
                                focus:ring-offset-0 
                                focus:ring-0 
                                focus:border-yellow-500 
                                focus:text-yellow-500 
                                focus:placeholder-yellow-500 
                                duration-300 
                                ease-in-out
                            `}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default Input;