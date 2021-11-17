const Button = ({ children, label, iconL, iconR, classes, href, target, onClick, iconLClasses, iconRClasses }) => {
    return (
        <button
            className={`${classes} flex items-center justify-center`}
            onClick={onClick ? onClick : null}
        >
            <div>
                <div className={iconLClasses}>
                    {iconL}
                </div>
            </div>
            <div>
                {(href) ?
                    (<a
                        href={href}
                        target={target}
                        rel="noopener noreferrer"
                    >
                        {label || children}
                    </a>) :
                    (<p>
                        {label}
                    </p>)}
            </div>
            <div>
                <div className={iconRClasses}>
                    {iconR}
                </div>
            </div>
        </button>
    );
};

export default Button;