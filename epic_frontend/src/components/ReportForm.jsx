import {React, useState} from 'react'
import './ReportForm.css'
import Navbar from './Navbar'
import { addReportById } from '../services/ReportService';
import { useParams, useNavigate } from "react-router-dom";

export default function ReportForm() {

    const [cycleWithPeakorNot, setCycleWithPeakorNot] = useState(0);
    const [reproductiveCategory, setReproductiveCategory] = useState(0);
    const [lengthofCycle, setLengthofCycle] = useState(0);
    const [estimatedDayofOvulation, setEstimatedDayofOvulation] = useState(0);
    const [lengthofLutealPhase, setLengthofLutealPhase] = useState(0);
    const [firstDayofHigh, setFirstDayofHigh] = useState(0);
    const [totalHighPostPeak, setTotalHighPostPeak] = useState(0);
    const [totalNumberofPeakDays, setTotalNumberofPeakDays] = useState(0);
    const [lengthofMenses, setLengthofMenses] = useState(0);
    const [totalMensesScore, setTotalMensesScore] = useState(0);
    const [meanBleedingIntensity, setMeanBleedingIntensity] = useState(0);
    const [intercourseInFertility, setIntercourseInFertility] = useState(0);
    const [unusualBleeding, setUnusualBleeding] = useState(0);
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [numberpreg, setNumberpreg] = useState(0);
    const [miscarriages, setMiscarriages] = useState(0);
    const [medvits, setMedvits] = useState(0);
    const [gynosurgeries, setGynosurgeries] = useState(0);
    const [urosurgeries, setUrosurgeries] = useState(0);
    let form = {}
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmitForm=()=>{

        form = {
            cycleWithPeakorNot : cycleWithPeakorNot,
            reproductiveCategory : reproductiveCategory,
            lengthofCycle : lengthofCycle,
            estimatedDayofOvulation : estimatedDayofOvulation,
            lengthofLutealPhase : lengthofLutealPhase,
            firstDayofHigh : firstDayofHigh,
            totalHighPostPeak : totalHighPostPeak,
            totalNumberofPeakDays : totalNumberofPeakDays,
            lengthofMenses : lengthofMenses,
            totalMensesScore : totalMensesScore,
            meanBleedingIntensity: meanBleedingIntensity,
            intercourseInFertility : intercourseInFertility,
            unusualBleeding : unusualBleeding,
            age : age,
            height : height,
            weight : weight,
            numberpreg : numberpreg,
            miscarriages : miscarriages,
            medvits : medvits,
            gynosurgeries : gynosurgeries,
            urosurgeries : urosurgeries
        }

        addReportById(id, form).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });

        navigate(`/track/${id}`);

    }
    
  return (
    <>
    <Navbar/>
    <div className='Report-container'>
        <h2 className="r-heading">
            Please Fill this form | We need this to know you better 😊
        </h2>

        <div className="r-sub-form">
            

            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Cycle With Peak or Not ?
                </h3>

                <p className="sub-form-box-p">
                    Indicates whether the cycle has a peak day where intensity of pain increases
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="cyclewithpeakornot" onChange={e=>setCycleWithPeakorNot(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="cyclewithpeakornot" onChange={e=>setCycleWithPeakorNot(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                Reproductive Category
                </h3>

                <p className="sub-form-box-p">
                Categorizes the reproductive status of the individual

                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Pre-menopause</div>
                <input type="radio" name="reproductiveCategory" onChange={e=>setReproductiveCategory(1)}/>

                <div className="sub-form-subCheckbox-option">Perimenopause</div>
                <input type="radio" name="reproductiveCategory" onChange={e=>setReproductiveCategory(2)}/>

                <div className="sub-form-subCheckbox-option">Post-menopause</div>
                <input type="radio" name="reproductiveCategory" onChange={e=>setReproductiveCategory(3)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Length of Cycle
                </h3>

                <p className="sub-form-box-p">
                    The total length of your menstrual cycle in days
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="lengthofcycle" onChange={e=>setLengthofCycle(e.target.value)} value={lengthofCycle}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                Estimated Day of Ovulation
                </h3>

                <p className="sub-form-box-p">
                The estimated day of ovulation within your cycle
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="estimateddayofovulation" onChange={e=>setEstimatedDayofOvulation(e.target.value)} value={estimatedDayofOvulation}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                Length of Luteal Phase
                </h3>

                <p className="sub-form-box-p">
                The length of the luteal phase (post-ovulation phase) in days
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="lengthoflutealphase" onChange={e=>setLengthofLutealPhase(e.target.value)} value={lengthofLutealPhase}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    First Day of High
                </h3>

                <p className="sub-form-box-p">
                    The first day in the cycle when you experience high fertility
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="firstDayofHigh" onChange={e=>setFirstDayofHigh(e.target.value)} value={firstDayofHigh}/>
                

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Total High Post Peak
                </h3>

                <p className="sub-form-box-p">
                    The total number of days with high fertility after the peak day
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="totalHighPostPeak" onChange={e=>setTotalHighPostPeak(e.target.value)} value={totalHighPostPeak}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Total Number of Peak Days
                </h3>

                <p className="sub-form-box-p">
                    The total number of peak fertility days in the cycle 
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="totalNumberofPeakDays" onChange={e=>setTotalNumberofPeakDays(e.target.value)} value={totalNumberofPeakDays}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Length of Menses
                </h3>

                <p className="sub-form-box-p">
                    The length of the menstruation phase in days
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="lengthofMenses" onChange={e=>setLengthofMenses(e.target.value)} value={lengthofMenses}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Total Menses Score
                </h3>

                <p className="sub-form-box-p">
                    A score representing the intensity and duration of menstruation
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="totalMensesScore" onChange={e=>setTotalMensesScore(e.target.value)} value={totalMensesScore}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Mean Bleeding Intensity
                </h3>

                <p className="sub-form-box-p">
                    The average intensity of bleeding during menstruation
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter Between 0 to 30</div>
                <input type="text" name="meanBleedingIntensity" onChange={e=>setMeanBleedingIntensity(e.target.value)} value={meanBleedingIntensity}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Intercourse In Fertile Window
                </h3>

                <p className="sub-form-box-p">
                    Indicates if intercourse occurred during the fertile window
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="intercourse" onChange={e=>setIntercourseInFertility(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="intercourse" onChange={e=>setIntercourseInFertility(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Unusual Bleeding
                </h3>

                <p className="sub-form-box-p">
                    Indicates if there was unusual bleeding during the cycle
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="bleeding" onChange={e=>setUnusualBleeding(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="bleeding" onChange={e=>setUnusualBleeding(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Age
                </h3>

                <p className="sub-form-box-p">
                    Enter Your age
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option"></div>
                <input type="text" name="age" onChange={e=>setAge(e.target.value)} value={age}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Height
                </h3>

                <p className="sub-form-box-p">
                    Enter your height
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter in inches</div>
                <input type="text" name="height" onChange={e=>setHeight(e.target.value)} value={height}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Weight
                </h3>

                <p className="sub-form-box-p">
                    Enter your weight
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Enter in pounds</div>
                <input type="text" name="weight" onChange={e=>setWeight(e.target.value)} value={weight}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Pregnancy
                </h3>

                <p className="sub-form-box-p">
                    Were you pregnant before ?
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="preg" onChange={e=>setNumberpreg(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="preg" onChange={e=>setNumberpreg(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Miscarriages
                </h3>

                <p className="sub-form-box-p">
                    Have you experienced any miscarriages before
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="mis" onChange={e=>setMiscarriages(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="mis" onChange={e=>setMiscarriages(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Medvits
                </h3>

                <p className="sub-form-box-p">
                    Indicates if the individual is taking any medications or vitamins
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="med" onChange={e=>setMedvits(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="med" onChange={e=>setMedvits(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Gynosurgeries
                </h3>

                <p className="sub-form-box-p">
                    Indicates if the individual has had any gynecological surgeries
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="gyno" onChange={e=>setGynosurgeries(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="gyno" onChange={e=>setGynosurgeries(0)}/>

                </div>

            </div>
            <div className="sub-form-box">

                <h3 className="sub-form-box-heading">
                    Urosurgeries
                </h3>

                <p className="sub-form-box-p">
                    Indicates if the individual has had any urological surgeries
                </p>
                <div className="sub-form-checkbox">
                <div className="sub-form-subCheckbox-option">Yes</div>
                <input type="radio" name="uro" onChange={e=>setUrosurgeries(1)}/>
                <div className="sub-form-subCheckbox-option">No</div>
                <input type="radio" name="uro" onChange={e=>setUrosurgeries(0)}/>

                </div>

            </div>

        </div>

        <div className="user-form-Button">
        <div onClick={handleSubmitForm} className="Button-water-hover-effect"> <span>Submit</span> <div className='wave'></div> </div>
       </div>
      
    </div>
    </>
  )
}
