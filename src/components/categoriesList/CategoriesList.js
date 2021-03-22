import React from 'react'
import Category from '../common/category/Category'

import './CategoriesList.scss';

//Category Items (to help implement a dynamic render in the future)
const categories = [
  {
    "name": "Εξαγωγή",
    "content": "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
  },
  {
    "name": "Μετακίνηση",
    "content": "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
  },
  {
    "name": "Εισαγωγή",
    "content": "Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη"
  }
];

const CategoriesList = () => (
  <div className="demo-dashboard-categories">
    {categories.map((category, id) => (
      <Category
        key={id}
        type={id+1}
        name={category.name}
        content={category.content}
      />
    ))}
  </div>
  );

export default CategoriesList;
