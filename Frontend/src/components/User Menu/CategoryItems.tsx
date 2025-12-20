interface CategoryItemsI{
    imgurl : string,
    title : string
}

const CategoryItems = ({imgurl, title } : CategoryItemsI) => {
  return (
    <div>
        <div>
            <img src={imgurl} alt="" />
        </div>
        <h1>{title}</h1>
    </div>
  )
}

export default CategoryItems