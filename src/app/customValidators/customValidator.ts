import { FormControl } from "@angular/forms";
import { promise } from "protractor";
import { Observable } from "rxjs";

export class CustomValidators {
    static invalidProjectName(cntrol: FormControl): { [message: string]: boolean } {
        if (cntrol.value === "test") {
            return { 'invalidProjectName': true }
        } else {
            return null;
        }
    }
    static asyncCustomValidator(cntrol: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (cntrol.value === 'testProjectName') {
                    return  resolve({ 'invalidProjectName': true });
                } else {
                    return  resolve(null);
                }
            }, 2000);
        })

        return promise;
    }
}