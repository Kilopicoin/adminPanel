
import './App.css';

import noDoubt from './noDoubt.json';
import Token from './token.json';
import DAO from './dao.json';
import pathfinder from './pathfinder.json';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';


function App() {

  const [noDoubtAddress] = useState('0x41D9154996Fb207903b128f536188897F1436578');
  const [TokenAddress] = useState('0x09e6E20FF399c2134C14232E172ce8ba2b03017E');
  const [pathfinderAddress] = useState('0x64491880c3f18276582e16D989943Aba6c141f04');
  const [DAOAddress] = useState('0x76f1640B15c372ff6dB116142044C6A5E33A1643');
  const [isAdmin, setisAdmin] = useState(0);
  const [loadAddressX] = useState(0);
  const [walletAddress, setwalletAddress] = useState('');

  const [inputWithdrawal, setinputWithdrawal] = useState(0);
  const [projectNameG, setprojectNameG] = useState('');
  
  const [inputBurn, setinputBurn] = useState(0);

  const [inputProjectID, setinputProjectID] = useState(0);
  const [projectLink, setprojectLink] = useState('');

  const [inputProjectID_C_, setinputProjectID_C_] = useState(0);
  const [inputContent_C_, setinputContent_C_] = useState('');


  const [inputProjectID_C_DAO, setinputProjectID_C_DAO] = useState(0);
  const [inputCommentID_C_DAO, setinputCommentID_C_DAO] = useState(0);

  const [loadingG, setloadingG] = useState(0);
  


  
  
  const [inputTopicNO, setinputTopicNO] = useState(0);
  

  

  useEffect(() => {
    const loadAddress = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          if ( address === "0xCF2346c4BFfB42DE8c28303f6ae7bFa59A30BA74" || address === "0xb17D9315F2BE27E5A1d897412bF5a6C3949449a4" 
             || address === "0x5E6c3cFfB89A71314CEc7dF98FDa92495E17B108"
          ) {
            setisAdmin(1);
            setwalletAddress(address);
          }

        } catch (error) {
          console.error('Error getting address:', error);
        }
      }
    };

    loadAddress();
  }, [loadAddressX]);


  const inputNameChanged = async (evt)  => {

    setprojectNameG(evt.target.value);

  };



  const inputWithdrawalChanged = async (evt)  => {

    setinputWithdrawal(evt.target.value);

  };



  const inputBurnChanged = async (evt)  => {

    setinputBurn(evt.target.value);

  };



  const inputLinkChanged = async (evt)  => {

    setprojectLink(evt.target.value);

  };



  const inputProjectIDChanged = async (evt)  => {

    setinputProjectID(evt.target.value);

  };


  

  const inputTopicNOChanged = async (evt)  => {

    setinputTopicNO(evt.target.value);

  };




  const inputContent_C_Changed = async (evt)  => {

    setinputContent_C_(evt.target.value);

  };



  const inputProjectID_C_Changed = async (evt)  => {

    setinputProjectID_C_(evt.target.value);

  };




  const inputProjectID_C_DAOChanged = async (evt)  => {

    setinputProjectID_C_DAO(evt.target.value);

  };



  const inputCommentID_C_DAOChanged = async (evt)  => {

    setinputCommentID_C_DAO(evt.target.value);

  };




  const noDoubtWithdraw = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(noDoubtAddress, noDoubt.abi, signer);


    const withdrawalReq = inputWithdrawal;
    const withdrawalReqM = withdrawalReq * 1000000;

    const sebepM = projectNameG;


    const cekim = await contract.withdraw(withdrawalReqM, sebepM, {
      from: address,
      gasPrice: 101000000000,
    });

    await cekim.wait();
    setloadingG(0);

  }





  const Burn = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(TokenAddress, Token.abi, signer);


    const burnReq = inputBurn;
    const burnReqM = burnReq * 1000000;

    const yakim = await contract.burn(burnReqM, {
      from: address,
      gasPrice: 101000000000,
    });

    await yakim.wait();

    setloadingG(0);
  }




  const PathfinderPublish = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(pathfinderAddress, pathfinder.abi, signer);


    const projectIDReqM = inputProjectID;

    const LinkM = projectLink;


    const publish = await contract.publishProject(projectIDReqM, LinkM, {
      from: address,
      gasPrice: 101000000000,
    });

    await publish.wait();
    setloadingG(0);

  }



  const Finalize = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(DAOAddress, DAO.abi, signer);


    const TopicNOReq = inputTopicNO;

    const Bitirme = await contract.Finalize(TopicNOReq, {
      from: address,
      gasPrice: 101000000000,
    });

    await Bitirme.wait();

    setloadingG(0);
  }



  


  const PathfinderChangeContent = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(pathfinderAddress, pathfinder.abi, signer);

    const inputProjectID_C_ReqM = inputProjectID_C_;

    const inputContent_C_ReqM = inputContent_C_;


    const change = await contract.ismeMudahele(inputProjectID_C_ReqM, inputContent_C_ReqM, {
      from: address,
      gasPrice: 101000000000,
    });

    await change.wait();

    setloadingG(0);
  }

  

  const DAOFlagContent = async () => {

    setloadingG(1);

    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const address = walletAddress;

    const contract = new ethers.Contract(DAOAddress, DAO.abi, signer);

    const inputProjectID_C_DAOReqM = inputProjectID_C_DAO;

    const inputCommentID_C_DAOReqM = inputCommentID_C_DAO;


    const flag = await contract.icerikMudahele(inputProjectID_C_DAOReqM, inputCommentID_C_DAOReqM, {
      from: address,
      gasPrice: 101000000000,
    });

    await flag.wait();

    setloadingG(0);
  }





  return (
    <div className="App">
      <header className="App-header">


      {loadingG === 1 && (

<div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

)}


      {isAdmin === 1 ? (
        <>

Kilopi Admin Panel ( Harmony )


<div className='card'>

  <h4>No Doubt</h4>

  <h5>Withdrawal &nbsp;

  <input className="inputC" placeholder='Name'
        
        onChange={inputNameChanged}
        
        
        
        ></input>
&nbsp;

<input className="inputC" placeholder='0'
        
        onChange={inputWithdrawalChanged}
        
        ></input>
        &nbsp;
        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          noDoubtWithdraw();
        }}
        >Withdraw</button>
</h5>

</div>






<div className='card'>

  <h4>Token</h4>

  <h5>Burn &nbsp;


<input className="inputC" placeholder='0'
        
        onChange={inputBurnChanged}
        
        ></input>
        &nbsp;
        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          Burn();
        }}
        >Burn</button>
</h5>

</div>






<div className='card'>

  <h4>Pathfinder</h4>

  <h5>Publish Project &nbsp;


<input className="inputC" placeholder='0'
        
        onChange={inputProjectIDChanged}
        
        ></input>
        &nbsp;


        <input className="inputC" placeholder='Link'
        
        onChange={inputLinkChanged}
        
        
        
        ></input>

&nbsp;

        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          PathfinderPublish();
        }}
        >Publish</button>
</h5>


<h5>Change Content &nbsp;


<input className="inputC" placeholder='0'
        
        onChange={inputProjectID_C_Changed}
        
        ></input>
        &nbsp;


        <input className="inputC" placeholder='Name'
        
        onChange={inputContent_C_Changed}
        
        
        
        ></input>

&nbsp;

        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          PathfinderChangeContent();
        }}
        >Change</button>
</h5>



</div>



<div className='card'>

  <h4>D.A.O</h4>

  <h5>Finalize Topic &nbsp;


<input className="inputC" placeholder='0'
        
        onChange={inputTopicNOChanged}
        
        ></input>
        &nbsp;
        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          Finalize();
        }}
        >Finalize</button>
</h5>



<h5>Flag Content &nbsp;


<input className="inputC" placeholder='0'
        
        onChange={inputProjectID_C_DAOChanged}
        
        ></input>
        &nbsp;


        <input className="inputC" placeholder='0'
        
        onChange={inputCommentID_C_DAOChanged}
        
        
        
        ></input>

&nbsp;

        <button className="buttonC" 
        onClick={(event) => {
          event.preventDefault();
          DAOFlagContent();
        }}
        >Flag</button>
</h5>




</div>







</>
      ) : (
<>

Access Denied

</>

      )}










        
      </header>
    </div>
  );
}

export default App;
