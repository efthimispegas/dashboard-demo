import React from 'react'
import { ReactComponent as ImportImage } from '../../../assets/SVG/import.svg'
import { ReactComponent as ExportImage } from '../../../assets/SVG/export.svg'
import { ReactComponent as MoveImage } from '../../../assets/SVG/move.svg'

import './Category.scss';

const Category = ({ type }) => (
  <div className="demo-dashboard-item">
    {type === 1 ? (
      <a href="#"><ImportImage /></a>
    ) : (
      type === 2 ? (
        <a href="#"><MoveImage /></a>
      ) : (
        <a href="#"><ExportImage/></a>
      )
    )}
  </div>
  );

export default Category;
