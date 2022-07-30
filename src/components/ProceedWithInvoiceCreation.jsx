import queryString from 'query-string';
import { nanoid } from "nanoid";

const ProcoeedWithInvoiceCreation = () => {
   const parsed = queryString.parse(document.location.search);
   console.log(parsed)
   const { address, branch, chosenCategory, email, idNumber, mobileNumber, numberForCard, paymentMethod } = parsed;


   return(
      <h1>Proceeding to create invoice...</h1>
   );
}

export default ProcoeedWithInvoiceCreation;