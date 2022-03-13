import { gql } from "apollo-angular";

export const GET_CATEGORY_NAMES_QUERY = gql`
    {
        categories {
            name
        }
    }
`;
