import React from "react";

//This Data is controlled by the Add Risk Tab
//Parent should be Adding new risk Component
//Add Risk

export default function Info(){
    return(
         <section>
            <div>
                <h1 className="font-bold text-3xl mb-3">
                   Risk Title 
                </h1>
               {/* live handling */}
                <div>
                   Risk Owner
                </div>
                <div>
                   Risk Status
                </div>
                <div>
                   Project with which the risk is being associated
                </div>
                <div>
                   Category to which the risk is related
                </div>
                <div>
                    Risk Relation
                </div>
                <div>
                   Risk Description 
                </div>
                <div>
                    Risk Trigger
                </div>

                <div>
                <div>
                    Risk Impact Description
                </div>
                <div>
                    Existing Controls
                </div>
                <div>
                    Impact On
                </div>
                <div>
                    Probability of Occurence
                </div>
                <div>
                   Impact
                </div>
                <div>
                    Risk Priority Number
                </div>
                <div>
                    Risk Priority
                </div>
                <div>
                    Risk Management Strategy
                </div>
                </div>
                <div>
                   <h3>
                     Mitigation plan
                   </h3>
                  <div>
                     Action Item
                  </div>
                  <div>
                    Action Taken
                  </div>
                      {/* Backend */}
                  <div>
                     Planned End Date
                  </div> 
                  <div>
                     Actual End Date 
                  </div>   
                  <div>
                     <h3>
                        Contigency Plan
                     </h3>
                     <div>
                        Contigency Plan 
                     </div>
                     <div>
                        Action Item
                     </div>
                     <div>
                        Action Taken
                     </div>
                     {/* Backend */}
                     <div>
                        Planned End Date 
                     </div>
                     <div>
                        Actual End Date
                     </div>
                  </div>
                   <div>
                      If The Risk is re evaluated then it will be displayed here
                   </div>                
                 </div>
            </div>
         </section>
    )

}