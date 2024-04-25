"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./page.css";
import { SetStateAction, useState } from "react";
import { Download } from "lucide-react";
const DashboardPage = () => {

    // these are few countries for showcase 
    const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan', 'Australia'];
    //this array holds the filtered countries name and sets the ones that are being searched for
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [countryName, setCountryName] = useState(''); //country name sets here for input

    //this function is used to filter the option according to the input given 
    // state and function for checkbox for checkbox
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<boolean[]>([]);

    const handleHeaderCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked: boolean = event.target.checked;
        setSelectAll(isChecked);
        setSelectedCheckboxes(scrappedEmails.map(() => isChecked));
    };

    const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked: boolean = event.target.checked;
        setSelectedCheckboxes((prevState) => {
            const newState: boolean[] = [...prevState];
            newState[index] = isChecked;
            return newState;
        });
    };
    // end of state and function for checkbox
    const handleCountry = (e: { target: { value: string; }; }) => {
        const term = e.target.value.toLowerCase();
        const filtered = countries.filter((country) => country.toLowerCase().startsWith(term));
        setFilteredCountries(filtered);
        setCountryName(term);
        console.log(term)
    };

    // this function is used to select the option form the filtered country and auto fill that 
    const handleCountryClick = (country: SetStateAction<string>) => {
        setCountryName(country);
        setFilteredCountries([]);
    };


    // .......... same function for the languge filter...........
    const language = ['English', 'Arabic', 'Japanese', 'Spanish', 'French', 'Chinese', 'Urdu'];

    const [filteredlanguages, setFilteredLanguages] = useState(language);
    const [selectedlanguage, setSelectedLanguage] = useState('');

    const handleLanguage = (e: { target: { value: string; }; }) => {
        const term = e.target.value.toLowerCase();
        const filtered = language.filter((language) => language.toLowerCase().startsWith(term));
        setFilteredLanguages(filtered);
        setSelectedLanguage(term);
    };

    const handleLanguageClick = (language: SetStateAction<string>) => {
        setSelectedLanguage(language);
        setFilteredLanguages([]);
    };


    const scrappedEmails = [{
        id: 1,
        domain: "example.com",
        url: "https://www.example.com"
    },
    {
        id: 2,
        domain: "example.com",
        url: "https://www.example.com"
    }
    ];
    return (
        <div>
            <div className="main-form flex flex-col items-start">
                <form className=" custom-input-form bg-white p-8 rounded  max-w-md w-full">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="text-left pr-4">
                                    <label className="text-gray-600 font-semibold">
                                        Keyword
                                    </label>
                                </td>
                                <td>
                                    <Input
                                        type="text"
                                        id="username"
                                        placeholder="Enter Keyword to Search"
                                        className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                                    />
                                </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td className="text-left pr-4">
                                    <label className="text-gray-600 font-semibold">
                                        Pages
                                    </label>
                                </td>
                                <td>
                                    <Input
                                        type="number"
                                        id="pages"
                                        placeholder="Number of Pages"
                                        className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                                    />
                                </td>
                            </tr>
                        </tbody>

                        <tbody>
                            <tr>
                                <td className="text-left pr-4">
                                    <label className="text-gray-600 font-semibold">
                                        Country
                                    </label>
                                </td>
                                <td>
                                    <Input
                                        onChange={handleCountry}
                                        value={countryName}
                                        type="text"
                                        id="country"
                                        placeholder="Enter Country e.g USA"
                                        className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                                    />
                                    {/* here the options will be showed by map fucntion  */}
                                    <div className="country-menu">
                                        {countryName && (
                                            <ul className="mt-1">
                                                {filteredCountries.map((country, index) => (
                                                    <li key={index} className="py-1 border-b border-gray-300 hover:bg-gray-200"
                                                        onClick={() => handleCountryClick(country)}
                                                    >
                                                        {country}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        {/* ........... */}
                        <tbody>
                            <tr>
                                <td className="text-left pr-4">
                                    <label className="text-gray-600 font-semibold">
                                        Language
                                    </label>
                                </td>
                                <td>
                                    <Input
                                        onChange={handleLanguage}
                                        value={selectedlanguage}
                                        type="text"
                                        id="language"
                                        placeholder="Enter Country e.g USA"
                                        className="custom-input-box border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full rounded-none bg-blue-50"
                                    />
                                    {/* here the options will be showed by map fucntion  */}
                                    <div className="country-menu">
                                        {selectedlanguage && (
                                            <ul className="mt-1">
                                                {filteredlanguages.map((language, index) => (
                                                    <li key={index} className="py-1 border-b border-gray-300 hover:bg-gray-200"
                                                        onClick={() => handleLanguageClick(language)}
                                                    >
                                                        {language}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-sky-700">Start Email Scrape</button>
                    </div>
                </form>
            </div>
            {/* .........end of input form ................ */}

            {/* main buttons to perform actions */}
            <div className="flex flex-col p-4">
                {/* ...........start of the output table............. */}
                {/* Table section with serial no., checkbox, domain, and URL */}
                <div className="overflow-x-auto">
                    <div className="flex justify-end mb-2 cursor-pointer ">
                        <Download className="w-10 h-11 hover:bg-[#8080804D]/30 rounded-md p-2 border-2 border-opacity-100" color="#808080" />
                    </div>
                    <table className="min-w-full border rounded-md bg-gray-300">
                        <thead>
                            <tr>
                                <th className="text-start border bg-gray-200 px-4 py-2">Serial No.</th>
                                <th className="text-start border bg-gray-200 px-4 py-2">
                                <input type="checkbox" checked={selectAll} onChange={handleHeaderCheckboxChange} />
                                Checkbox</th>
                                <th className="text-start border bg-gray-200 px-4 py-2">Domain</th>
                                <th className="text-start border bg-gray-200 px-4 py-2">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example row, the output data can be mapped here accordingly */}
                            {scrappedEmails.map((email, index) => (
                                <tr key={index}>
                                    <td id="serial-no" className="border px-4 py-2">{email.id}</td>
                                    <td className="border px-4 py-2">
                                        <input type="checkbox"  checked={selectedCheckboxes[index]} onChange={handleCheckboxChange(index)} />
                                    </td>
                                    <td id="domain" className="border px-4 py-2">{email.domain}</td>
                                    <td id="url-link" className="border px-4 py-2">{email.url}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* ...........end of the output table............. */}

            </div>

        </div>
    )
}

export default DashboardPage;