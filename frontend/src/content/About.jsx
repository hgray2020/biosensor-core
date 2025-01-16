import ContentBoxGroup from "../components/ContentBoxGroup"


function About() {
    const content = [
        {
            header: "About",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque ridiculus hendrerit justo consequat odio sapien fusce. Proin facilisi dictum parturient accumsan suscipit ipsum. Libero quis urna odio; molestie magna efficitur. Felis malesuada quam at mauris lacus imperdiet luctus. Pretium fusce fringilla vestibulum donec fames. Senectus massa risus leo bibendum vitae. Posuere pellentesque curabitur primis venenatis natoque. Nisl dapibus placerat quis blandit urna taciti. Molestie non suscipit leo platea penatibus. Elementum aliquet proin litora velit mus lacus conubia.",
            img: "tmp.jfif"
        },
        {
            header: "About",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "tmp.jfif"
        },
        {
            header: "About",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "tmp.jfif"
        }
    ];

    return <ContentBoxGroup contentBoxes={content}/>
}

export default About;