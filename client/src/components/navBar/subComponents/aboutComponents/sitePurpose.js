import './sitePurpose.css'
function SitePurpose() {

  const collegePriceData = "https://educationdata.org/average-cost-of-college"
    
  const NewYork = <a href="https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship" target="_blank" rel="noreferrer">New York</a>
  const California = <a href="https://admission.universityofcalifornia.edu/tuition-financial-aid/types-of-aid/blue-and-gold-opportunity-plan.html" target="_blank" rel="noreferrer">California</a>
  const OklahomaPromise = <a href="https://www.okhighered.org/okpromise/" target="_blank" rel="noreferrer">Oklahoma Promise</a>

  const UTAustin = <a href="https://texasadvance.utexas.edu/" target="_blank" rel="noreferrer">University of Texas at Austin</a>
  const WestTexasAM = <a href="https://www.wtamu.edu/student-support/financial-aid/buff-promise/index.html" target="_blank" rel="noreferrer">West Texas A&M University</a>
  const TexasAM = <a href="https://financialaid.tamu.edu/Aggie-Assurance" target="_blank" rel="noreferrer">Texas A&M University</a>
  const UTDallas = <a href="https://www.utdallas.edu/costs-scholarships-aid/costs/tuition/promise/" target="_blank" rel="noreferrer">University of Texas at Dallas</a>


  const publicTuitionTable = <table>
                        <caption>4 Year Public University Yearly Tuition</caption>
                        <tr>
                            <th>Year</th>
                            <th>Tuition</th>
                            <th>% Change</th>
                        </tr>
                        <tr>
                            <th>1981</th>
                            <th>$2,546</th>
                            <th>0</th>
                        </tr>
                        <tr>
                            <th>2000</th>
                            <th>$5,266</th>
                            <th>106%</th>
                        </tr>
                        <tr>
                            <th>2020</th>
                            <th>$9,480</th>
                            <th>273%</th>
                        </tr>
                       </table>

                       
  const privateTuitionTable = <table>
                                <caption>4 Year Private University Yearly Tuition</caption>

                                <tr>
                                    <th>Year</th>
                                    <th>Tuition</th>
                                    <th>% Change</th>
                                </tr>
                                <tr>
                                    <th>1981</th>
                                    <th>$17,716</th>
                                    <th>0</th>
                                </tr>
                                <tr>
                                    <th>2000</th>
                                    <th>$32,879</th>
                                    <th>86%</th>
                                </tr>
                                <tr>
                                    <th>2020</th>
                                    <th>$46,448</th>
                                    <th>162%</th>
                                </tr>
                                </table>
  return (
    <div>
        <h2>Purpose</h2>
        <p>American college tuition has <a href={collegePriceData} target="_blank" rel="noreferrer">increased drastically since the 1980s</a> for both public and private universities.</p>
        <div className="tuition-table">
            {publicTuitionTable}
            {privateTuitionTable}
        </div>
        <p> These increased costs put an onus on students to choose their education path wisely and to give each of their options plenty of scrutiny.
            This site is meant to give a simple view of U.S. college costs and state student aid. 
            Hopefully make it easier for students to see what options/opportunities are
            available in their state.
        </p>
        <ul>
            <li>The Search tab gives high-level details for U.S. universities (average net cost/year by household income, tuition prices, average SAT scores, etc.).
                Average net cost by income can be especially helpful, as it gives a rough estimate of how much aid the university is likely to give you based on your family's income level.
                Some universities are very generous and give students lots of aid if they come from low-middle income families.
            </li>
            <li>
                The Favorites tab lets you view schools you have favorited on the main search tab.
            </li>
            <li>
                The U.S. State Programs tab lists either state programs that significally reduce tuition costs for low-income students or individual college programs
                that reduce tuition costs for these folks.
                To call out a few states:
                <ul>
                    <li>{NewYork} allows students with household incomes under $125,000 to attend State University of New York and City University of New York colleges at no tuition cost</li>
                    <li>{California} allows students with household incomes under $80,000 to attend any University of California System campus at no tuition cost</li>
                    <li>Texas has many, many universities that cover tuition for low-income students. The income requirement varies by university, but it can be as
                        high as $80,000 for {WestTexasAM}, $65,000 for the {UTAustin}, and $60,000 for {TexasAM}. At the lower end,
                        the {UTDallas} covers tuition costs for students with a household income under $25,000.
                    </li>
                    <li>The {OklahomaPromise} allows students with household incomes under $60,000 to attend any public university in Oklahoma tuiton free.
                    Students must apply to the program before their senior year of high school.</li>
                <p>In my opinion, these states give the most generous aid in America but there are many others I can't list here, so please look up your state on the tab if it isn't listed above.</p>
                </ul>
            </li>
        </ul>
        <p>Tips that can lower your college costs are below.</p>
    </div>
  );
}

export default SitePurpose;
