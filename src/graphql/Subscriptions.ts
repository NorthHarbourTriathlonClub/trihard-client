import { gql } from '@apollo/client';

export const INCOME_BY_PAYMENT_METHOD = gql`
  subscription INCOME_BY_PAYMENT_METHOD(
    $startDate: DateTime
    $endDate: DateTime
  ) {
    incomeGroupBy(
      field: "paymentMethod"
      valueType: "sum"
      startDate: $startDate
      endDate: $endDate
    ) {
      incomePaymentMethod
      sum
    }
  }
`;
