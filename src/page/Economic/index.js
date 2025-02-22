import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import styles from "./style.module.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { formatBalance } from '../../utils/formatBalance';

import { ReactComponent as ImgCurve1 } from "../../components/shapes/curves/curve-1.svg";

import ImgStaking1 from "./img/staking-1.jpg";
import ImgStaking2 from "./img/staking-2.jpg";

import ImgInflation1 from "./img/inflation-1.jpg";
import ImgInflation2 from "./img/inflation-2.jpg";

import IMG_CRING from "./img/cring.png";
import IMG_CKTON from "./img/ckton.png";



function Home() {
  const emptyTokenInfo = {
    CRING: {
      maxSupply: "10000000000000000000", // Total Supply
      availableBalance: "", // Circulating Supply
      totalIssuance: "", // Total Supply
    },
    CKTON: {
      maxSupply: "",
      availableBalance: "",
      totalIssuance: "",
    },
  };

  const [tokenInfo, setTokenInfo] = useState(emptyTokenInfo);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://crab.subscan.io/api/scan/token").then((response) => {
      console.log(response);
      const detail = response.data.data.detail;
      setIsLoaded(true);

      setTokenInfo({
        CRING: {
          availableBalance: detail.CRING.available_balance,
          totalIssuance: detail.CRING.total_issuance,
          maxSupply: "10000000000000000000",
        },
        CKTON: {
          availableBalance: detail.CKTON.available_balance,
          totalIssuance: detail.CKTON.total_issuance,
          maxSupply: "",
        }
      });
    }).catch((error) => {
      console.log('fetch https://crab.subscan.io/api/scan/token error:', error);
      setIsLoaded(true);
    });
  }, []);

  const Loading = useCallback(() => {
    return (
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only"></span>
      </div>
    )
  }, []);

  return (
    <>
      <Navbar
        classList="navbar-light bg-white"
        container="container"
        button="primary"
      />

      {/* WELCOME  */}
      <section
        data-jarallax
        data-speed=".8"
        className="pt-10 pb-11 py-md-12 overlay overlay-black overlay-60 jarallax"
        style={{
          backgroundImage: "url(../img/covers/cover-4.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Heading  */}
              <h1 className="display-2 fw-bold text-white">
                Crab economic model
              </h1>

              {/* Text  */}
              <p className="lead text-white-75 mb-0">
                INTERNET OF TOKENS, CONNECTED!
              </p>
            </div>
          </div>
          {/* / .row  */}
        </div>
        {/* / .container  */}
      </section>

      {/* FLEXIBILITY  */}
      <section className="pt-8 pt-md-11 bg-gradient-light-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Badge  */}
              {/* <span className="badge rounded-pill bg-success-soft mb-3">
              <span className="h6 text-uppercase">Flexibility</span>
            </span> */}

              {/* Heading  */}
              <h1>Staking model</h1>

              {/* Text  */}
              <p className="fs-lg text-gray-700 mb-7 mb-md-9">
                The Darwinia Network will distribute CRINGs as an incentive to
                the participants of Staking. The process of Staking can also be
                understood as the POS mining process, where the miner obtains
                Staking energy by staking tokens. According to complexity,
                Staking can be divided into basic and advanced versions.
              </p>
            </div>
          </div>
          {/* / .row  */}
          <div className="row">
            <div className="col-12 col-md-6" data-aos="fade-up">
              {/* Card  */}
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                {/* Image  */}
                <img src={ImgStaking1} alt="..." className="card-img-top" />

                {/* Shape  */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    {/* {{> curves/curve-1}} */}
                    <ImgCurve1 />
                  </div>
                </div>

                {/* Body  */}
                <div className="card-body position-relative">
                  {/* Badge  */}
                  <div className="position-relative text-end mt-n8 me-n4 mb-3">
                    <span className="badge rounded-pill bg-success">
                      <span className="h6 text-uppercase">Basic Model</span>
                    </span>
                  </div>

                  {/* Heading  */}
                  <h3>Basic Model</h3>

                  {/* Text  */}
                  <p className="text-muted">
                    If users start to retrieve the CRINGs from Staking, the
                    mining will stop, and the CRINGs will take 14 days to fully
                    unbond.
                  </p>

                  {/* Link  */}
                  {/* <a href="#!" className="fw-bold text-decoration-none">
                    Read more <i className="fe fe-arrow-right ms-3"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Card  */}
              <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">
                {/* Image  */}
                <img src={ImgStaking2} alt="..." className="card-img-top" />

                {/* Shape  */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    {/* {{> curves/curve-1}} */}
                    <ImgCurve1 />
                  </div>
                </div>

                {/* Body  */}
                <div className="card-body position-relative">
                  {/* Badge  */}
                  <div className="position-relative text-end mt-n8 me-n4 mb-3">
                    <span className="badge rounded-pill bg-primary">
                      <span className="h6 text-uppercase">Advanced Model</span>
                    </span>
                  </div>

                  {/* Heading  */}
                  <h3>Advanced Model</h3>

                  {/* Text  */}
                  <p className="text-muted">
                    During the locked period, users cannot unlock their CRINGs.
                    Unless they utilise triple the amount of CKTONs as penalty.
                  </p>

                  {/* Link  */}
                  {/* <a href="#!" className="fw-bold text-decoration-none">
                    Read more <i className="fe fe-arrow-right ms-3"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          {/* / .row  */}
        </div>
        {/* / .container  */}
      </section>

      {/* Tokenomics */}
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              {/* Badge  */}
              {/* <span className="badge rounded-pill bg-success-soft mb-3">
                <span className="h6 text-uppercase">Flexibility</span>
              </span> */}

              {/* Heading  */}
              <h1>Supply</h1>

              {/* Text  */}
              <p className="fs-lg text-gray-700 mb-7 mb-md-9">
                The data here may lag behind the actual situation. If you need
                accurate data, please click here.
              </p>
            </div>
          </div>
          {/* / .row  */}
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <div
                className={`card ${styles.ringCard} d-flex flex-row text-white`}
              >
                <div className="card-body d-flex align-items-stretch">
                  <div className="row">
                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={IMG_CRING}
                        width="56"
                        className="rounded mx-auto d-block"
                        alt="..."
                      />
                      <h3 className="mt-4">CRING</h3>
                    </div>
                    <div className="col-9 d-flex ">
                      <div className="row flex-column justify-content-between">
                        <div>CRING is the native token of Crab Network</div>
                        <div>
                          <div className="d-flex flex-row justify-content-between ">
                            <p className="mb-0">Max Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {formatBalance(tokenInfo.CRING.maxSupply)}
                            </p> : <Loading/>}
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0">Circulating Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {formatBalance(tokenInfo.CRING.availableBalance)}
                            </p> : <Loading/>}
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0">Total Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {formatBalance(tokenInfo.CRING.totalIssuance)}
                            </p> : <Loading/>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-4">
              <div
                className={`card ${styles.ktonCard} d-flex flex-row text-white`}
              >
                <div className="card-body d-flex align-items-stretch">
                  <div className="row">
                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                      <img
                        src={IMG_CKTON}
                        width="56"
                        className="rounded mx-auto d-block"
                        alt="..."
                      />
                      <h3 className="mt-4">CKTON</h3>
                    </div>
                    <div className="col-9 d-flex ">
                      <div className="row flex-column justify-content-between">
                        <div>
                          CKTON is a derivative commitment token of CRING, which
                          encourages long-term involvement.
                        </div>
                        <div>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0">Max Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {tokenInfo.CKTON.maxSupply ? formatBalance(tokenInfo.CKTON.maxSupply) : '--'}
                            </p> : <Loading/>}
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0">Circulating Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {formatBalance(tokenInfo.CKTON.availableBalance)}
                            </p> : <Loading/>}
                          </div>
                          <div className="d-flex flex-row justify-content-between">
                            <p className="mb-0">Total Supply</p>
                            {isLoaded ? <p className="mb-0">
                              {formatBalance(tokenInfo.CKTON.totalIssuance)}
                            </p> : <Loading/>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </section>

      {/* Inflation  */}
      <section className="py-8 py-md-11 mt-12 bg-gray-200">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              {/* Heading  */}
              <h2 className="fw-bold">CRING Inflation Model</h2>

              {/* Text  */}
              <p className="fs-lg text-muted mb-7 mb-md-9">
                CRING has the same inflation model as RING, the total cap of the
                block reward is adjusted once a year. The total number of
                hard-cap for RING is 10 billion. The following figure shows the
                CRING’s inflation model.
              </p>
            </div>
          </div>
          {/* / .row  */}
          <div className="row">
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              {/* Card  */}
              <div
                className="card shadow-light-lg overflow-hidden"
                data-aos="fade-up"
              >
                <img src={ImgInflation1} className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              {/* Card  */}
              <div
                className="card shadow-light-lg overflow-hidden text-center"
                data-aos="fade-up"
              >
                <img src={ImgInflation2} className="img-fluid" alt="..." />
              </div>
            </div>
          </div>
          {/* / .row  */}
          <div className="row">
            <div className="col-12">
              <p className="text-center mt-4">
                Note: The block reward of year N is 1 - (99/100)^sqrt(N) of
                total remaining issuable
              </p>
            </div>
          </div>
          {/* / .row  */}
        </div>
        {/* / .container  */}
      </section>

      {/* ABOUT  */}
      <section className="py-8 py-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              {/* Heading  */}
              <h2 className="fw-bold">Revenue Model</h2>
            </div>
          </div>
          {/* / .row  */}
          <div className="row gx-4">
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              {/* Card  */}
              <div
                className="card shadow-light-lg overflow-hidden justify-content-center"
                data-aos="fade-up"
              >
                <div className="row flex-grow-1">
                  <div className="col-md-4 position-relative">
                    {/* Image  */}
                    <img
                      src="../img/crab/revenue-1.png"
                      className="h-75 position-absolute right-0 mt-7 me-n4"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    {/* Body  */}
                    <div className="card-body py-7 py-md-9 text-left">
                      {/* Heading  */}
                      <h4 className="fw-bold">Network Expense</h4>

                      {/* Text  */}
                      <p className="text-muted mb-0 text-start">
                        Validators’ Incentive (Inflation). <br />
                      </p>

                      <p className="text-muted mb-0 text-start">
                        Fishermen’s Incentive from Adversaries’ Slash
                        (self-sustain).
                      </p>
                    </div>
                  </div>
                </div>
                {/* / .row  */}
              </div>
            </div>
            <div className="col-12 col-lg-6 d-lg-flex mb-4">
              {/* Card  */}
              <div
                className="card shadow-light-lg overflow-hidden justify-content-center"
                data-aos="fade-up"
              >
                <div className="row">
                  <div className="col-md-8 position-relative">
                    {/* Body  */}
                    <div className="card-body py-7 py-md-9 text-left">
                      {/* Heading  */}
                      <h4 className="fw-bold">Network Revenue</h4>

                      {/* Text  */}
                      <p className="text-muted mb-0 text-start">
                        Cross-chain Asset Transfer Service Fee (per TX) as
                        Revenue.
                      </p>

                      {/* Text  */}
                      <p className="text-muted mb-0 text-start">
                        Verification Game Slash Tax as Revenue.
                      </p>

                      {/* Text  */}
                      <p className="text-muted mb-0 text-start">
                        Revenue Pool is used to buy back RING and burn.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* Image  */}
                    <img
                      src="../img/crab/revenue-2.png"
                      className="h-75 position-absolute left-0 mt-7 ms-n4"
                      alt="..."
                    />
                  </div>
                </div>
                {/* / .row  */}
              </div>
            </div>
          </div>
          {/* / .row  */}
        </div>
        {/* / .container  */}
      </section>

      <Footer classList="bg-dark" />
    </>
  );
}

export default Home;
