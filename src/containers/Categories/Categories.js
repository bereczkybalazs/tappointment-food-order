import React from 'react';
import {connect} from "react-redux";
import {fetchCategories} from "../../store/actions/CategoryActions";

class Categories extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div className="categories">
                Categories
                <div className="category-list">
                    {this.props.categories && this.props.categories.map(category => {
                        return (
                            <div key={category.id} className="category-item">
                                <figure className="category-item__image-container">
                                    <img src={category.img} alt={category.name}/>
                                    <figcaption className="category-item__image-title">
                                        {category.name}
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.app.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);