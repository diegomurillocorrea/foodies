const Textarea = ({containerClasses, id, label, name, classes, onChange, placeholder, children}) => {
    return (
        <div className={containerClasses}>
            <div>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>
            <div>
                <textarea
                    id={id}
                    name={name}
                    className={`${classes} focus:outline-none focus:border-yellow-500 focus:text-yellow-500 focus:placeholder-yellow-500 duration-300 ease-in-out`}
                    onChange={onChange}
                    placeholder={placeholder}
                >
                    {children}
                </textarea>
            </div>
        </div>
    );
};

export default Textarea;