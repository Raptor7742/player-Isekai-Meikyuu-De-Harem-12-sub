const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 12 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m204.syncusercontent.com/mfs-60:eeaa4b0beff30377f2081d6e3cffe476=============================/p/Isekai.Meikyuu.De.Harem.O.S01e12.Unrated.Vostfr.1080P.Hdtv.X264.mp4?allowdd=0&datakey=iJQI3+JlM5eoIVP1FkXbcI3oKPMx9erWveVBNqMV80mrvg9a/s20eEKcHqMWkp9a+NzuttHTBIcd7SwzF9zHxsTbC1555Wtu501G23Z5qtPmTS/PUaYiqmqMeWWCn4mYO7th8wXHL12t7SIFx7rXFwnBzCW6gpEzCLbkWf9SnQ62+m0z4eELj7NGHw6dEVOf2dyk3xXIkOYB+XYtujw58ZRmcL1UBaGBZUaeuBIAJTfQpIf2lpSBl5VA2hM2p0YRzcnSdf6c5SHFPjvAgXULRYahM58lbKmKpEc3i1mdvabgGtO73Ky9JLB49M/MNapbrplv6nGqWKa2iRRPNgHYbg&engine=ln-2.3.7.3&errurl=McbcoFOkBg4z8RgbJVyFN8d2hN4l/2gxt/JNFZnbLRBBrvP3m+qr8ClIIImemy9oVAnmpwzQOUhQILrRK750TdwF+8j/Ubdu6qHIzqvq21vW7/ZBZYZNEffp1arilzpFoVKEitor8YM2YUVC9Z/7dfxMdvD+AORkMMU20dVI1vPfo7vLYeCw7t0qtDtUJJN1uduo2JGUQ1KAvFj6TQRoI/Am/GXCky3deljZ7w2DlhtNElKVnRhcV5fXF5ql35e3f3WQPVPrBb+EgC6AjSMM4wQ4Ws2D2+OnhkLNgqqERWA21q6EzIhnzdc8h7vqLiCMWLpTg27EQwBxmvfcGAlU1w==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uTy5TMDFlMTIuVW5yYXRlZC5Wb3N0ZnIuMTA4MFAuSGR0di5YMjY0Lm1wNCI7ZmlsZW5hbWUqPVVURi04JydJc2VrYWkuTWVpa3l1dS5EZS5IYXJlbS5PLlMwMWUxMi5VbnJhdGVkLlZvc3Rmci4xMDgwUC5IZHR2LlgyNjQubXA0Ow&ipaddress=1458994159&linkcachekey=aa0e898e0&linkoid=652170001&mode=101&sharelink_id=9104619980001&timestamp=1672599178139&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=20532568b2ebbb84eba57f06a1ac68b6f1a32213&cachekey=60:eeaa4b0beff30377f2081d6e3cffe476=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
