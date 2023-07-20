import fs from 'fs';
import _ from 'lodash'
import {BinarySearchTree} from 'datastructures-js'

let data: DataSaver[] = [];

export class DataSaver {
    constructor(public url: string, public label: string) {}

    insert(): void {
        data.push(this);
        DataSaver.save();
    }

    static save(): void {
        fs.writeFile('data/data.json', JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                console.error('An error occurred while saving data:', err);
            } else {
                console.log('Data saved successfully!');
            }
        });
    }

    static retrieve(label: string): DataSaver | undefined {
        const found = data.find(ds => ds.label === label);
        if (found) {
            return new DataSaver(found.url, found.label);
        }
        return undefined;
    }

    static load(): void {
        if (!fs.existsSync('data/data.json')) {
            console.log('Data file not found. Creating it...');
            DataSaver.save();
        } else {
            fs.readFile('data/data.json', 'utf-8', (err, fileContent) => {
                if (err) {
                    console.error('An error occurred while reading data:', err);
                } else {
                    try {
                        data = JSON.parse(fileContent);
                        console.log('Data loaded successfully!');
                    } catch (parseError) {
                        console.error('An error occurred while parsing data:', parseError);
                    }
                }
            });
        }
    }
}