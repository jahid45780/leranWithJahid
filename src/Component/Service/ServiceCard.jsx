

const ServiceCard = ({serviceCards}) => {
    const {title}= serviceCards;
    return (
        <div>
            <h1> {title} </h1>
        </div>
    );
};

export default ServiceCard;