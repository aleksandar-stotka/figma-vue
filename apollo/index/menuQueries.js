import gql from "graphql-tag"

export const GET_MENUS_QUERY = gql`
 query  {
menus {
  data {
    id,
    attributes{
      ingrediants,
      price,
      image {
        data {
          id,
          attributes {
            url
            previewUrl
            width
            height
          
          }
        }
      }
      
    },
    
}
}
}
`;