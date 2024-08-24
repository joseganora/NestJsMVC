interface Beer {
    id: string;                         // Unique identifier for the beer
    name: string;                       // Name of the beer
    brewery: string;                    // Name of the brewery
    style: string;                      // Style of the beer (e.g., IPA, Lager, Stout)
    abv: number;                        // Alcohol by volume (as a percentage)
    description?: string;               // Description of the beer
    originCountry: string;              // Country of origin
    price: Price;                       // Price information
}

