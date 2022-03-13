import { gql } from "apollo-angular";

export const GET_CATEGORIES_QUERY = gql`
    {
        categories {
            name
            funds {
                budgetedAmount
                name
                spentAmount
            }
        }
    }
`;
