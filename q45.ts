function make_car(
    manufacturer: string,
    model: string,
    ...optional: [string, any][]
    ): object {
        let car = {manufacturer,model};

        optional.forEach(([key, value]) => (car[key] = value));
        return car;
    }
    console.log(make_car("Toyota", "Supra", ["Colour","White"], ["Year","2023"]));
    console.log(make_car("Nissan","GTR", ["Colour","Black"], ["Sunroof","True"]));
