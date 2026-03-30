import React from 'react';



function FooterComp() {
  return <>
    <footer style={{gap: '0px'}}>
      <div style={{height: '100%', backgroundColor: '#cacacaff',textAlign: 'center', color: '#000'}}>
        <h3>Contact Information:</h3>

        <div style={{display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', textAlign: 'left', width: '300px', margin: '0 auto', fontSize: '13px', height: '240px'}}>
            <p><strong>Address:</strong> Greater Salt Lake Area, Utah 84115</p>

            <p><strong>Phone:</strong> (385) 499-1578</p>

            <p><strong>Email:</strong> support@jferguson.com</p>
        </div>
        

        
      </div>
      
      <div style={{padding: '5px', width: '100%', height: '85px', textAlign: 'center',color: "#fff", backgroundColor: '#282c34', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <p style={{padding: '0px', margin: '0px', fontSize: '13px', color: '#666', height: '50px'}}>JFerguson Software Solutions, Inc. - JFerguson Software Solutions Terms Of Service </p>
      </div>
    </footer>
  </>
}


export default FooterComp;

