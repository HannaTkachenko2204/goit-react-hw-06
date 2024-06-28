import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

export default rootReducer;
