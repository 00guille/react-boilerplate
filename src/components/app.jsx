import React from 'react';
import { connect } from 'react-redux';
import AjaxRequest from './ajax/ajax-request';
import CodeBlock from './common/code-block';
import HeroHeading from './common/hero-heading';
import Tabs from './tabs/tabs';
import Panel from './common/panel';
import Footer from './common/footer';

function App ({
    children,
    state,
    location
}) {
    return (
        <section style={style.wrapper}>

            <HeroHeading
                title="react-boilerplate"
                subtitle="A slightly opinionated setup for ReactJS"
            />

            <section style={style.container}>
                <section style={style.column}>

                    { /* Render AJAX example */ }
                    <Panel
                        faIcon="globe"
                        style={style.panel}
                        title="Ajax Example">
                        <AjaxRequest />
                    </Panel>

                    { /* Render router example */ }
                    <Panel
                        faIcon="link"
                        style={style.panel}
                        title="Router Example" >
                        <Tabs activePath={location.pathname} >
                            { children }
                        </Tabs>
                    </Panel>

                </section>

                { /* Render Redux state */ }
                <Panel
                    faIcon="tree"
                    style={style.panel}
                    title="Redux State" >
                    <CodeBlock code={state} />
                </Panel>

            </section>

            { /* Render footer */ }

        </section>
    )
}

const style = {
    wrapper: {
        width: '100%'
    },
    container: {
        width: '100%',
        minWidth: 450,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column'
    },
    panel: {
        width: 450
    }
};

export default connect(
    (state) => ({ state })
)(App);
