import { CountryCode } from './country-code.entity';
import { Country } from './country.entity';
import { User } from './user.entity';
export declare class UserDetails {
    id: string;
    firstName: string;
    lastName: string;
    zipCode: string;
    address1: string;
    address2: string;
    phone: string;
    countryCode: CountryCode;
    country: Country;
    user: User;
    theme: boolean;
}
