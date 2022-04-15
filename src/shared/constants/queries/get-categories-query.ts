import { gql } from "apollo-angular";

export const GET_CATEGORIES_QUERY = gql`
    query Query {
        categories {
            _id
            name
            funds {
                _id
                budgetedAmount
                name
                spentAmount
            }
        }
    }
`;
