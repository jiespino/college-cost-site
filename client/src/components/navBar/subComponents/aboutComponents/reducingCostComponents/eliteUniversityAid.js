
function EliteUniversityAid() {
  let needBasedFinAidLink = "https://studentloanhero.com/featured/us-colleges-generous-financial-aid-packages/"
  let needBasedFinAidDetailsLink = "https://studentloanhero.com/featured/free-college-tuition-prestigious-schools/"
  let washPostPrivUnivRiskReward = "https://www.washingtonpost.com/outlook/2019/03/15/advantages-getting-into-name-brand-college-are-wildly-overblown/"
  let bookOnPrivUnivBenefitLink = "https://www.amazon.com/Where-You-Not-Who-Youll/dp/1455532681"
  const fullRideScholarships = "https://blog.prepscholar.com/colleges-with-full-ride-scholarships"
  return (
    
    <div>
        <h3>Private University Financial Aid</h3>
        <li>
            <p>Elite private universities <a href={needBasedFinAidLink} target="_blank" rel="noreferrer">(here is a list of some)</a> offer 
            very generous need based aid for lower-middle income students.
            If a student comes from a lower-middle income family, the best method for keeping costs low is to get
             accepted into one of these universities, as they can have most 
            of their tuition covered by the university. The amount of aid and income cutoffs vary by university. 
            Some of these colleges offer free tuition for students with a household income less than 100k, while some are more strict, with the limit at 65k.
             After the cutoff parents are expected to contribute 
            at an increased rate. <a href={needBasedFinAidDetailsLink} target="blank" rel="noreferrer">Here are more details on these universities' need based aid</a>.
        </p>
        <p>
            For high-income students these universities are very costly, but salaries for students who graduate from these universities are much higher on-average. 
            For students from high-income families there is a small amount of controversy whether a degree from one of these elite universities is worth the cost.
            Graduates from these universities do make much more than from other universities, 
            on-average, but when <a href={washPostPrivUnivRiskReward} target="_blank" rel="noreferrer">controlling for other factors such as work ethic/test scores/one's networking skills
            it may be better to go to a lower tier university if it is much less costly</a>. America has many great public universities/slightly below A+ tier private universities that <a href={fullRideScholarships} target="_blank" rel="noreferrer">offer full-ride scholarships
            to talented and driven students</a>, so it may be worth looking into this option if you decide a highly, highly touted private university is just too expensive.
            Because private university tuition rates are starting to cost a small fortune, it becomes more important to take these factors into account.
             Here is <a href={bookOnPrivUnivBenefitLink} target="_blank" rel="noreferrer">a book on the subject of whether top tier private universities are worth it.
            </a>
        </p>
            <p>This option is difficult as the acceptance rate for these colleges is very low and gets lower each year. 
              Getting accepted will require lots of hard studying, good extracurricular activities, and some luck.</p>
        </li>
    </div>
  );
}

export default EliteUniversityAid;
