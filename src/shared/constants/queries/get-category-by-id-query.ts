import { gql } from "apollo-angular";

export const GET_CATEGORY_BY_ID_QUERY = gql`
    query Query($_id: ID!) {
        category(_id: $_id) {
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
