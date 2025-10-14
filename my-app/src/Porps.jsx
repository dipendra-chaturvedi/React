function Props(property) {
    return (
        <>
            <div className="test">Props Component</div>
            <div>{property.name}</div>
            <div>{property.age}</div>
            <div>{property.city}</div>
        </>
        
    )
}

export default Props