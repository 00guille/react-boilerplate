import React from 'react';
import Entity from './Entity';
import { Flexbox } from '../../common';
import { fetchFoo, fetchBar, fetchFail } from '../../../redux/actions/thunk-action-creators';
import { connect } from 'react-redux';

function AjaxExample ({
    fooEntity,
    barEntity,
    failEntity,
    fetchBar,
    fetchFoo,
    fetchFail
}) {
    return (
        <Flexbox column={true}>
            <div>
                <i className="fa fa-angle-right" style={{ fontWeight: 700 }}/>&nbsp;
                Utilizes&nbsp;<a href="https://github.com/mikechabot/redux-entity">redux-entity</a>&nbsp;for domain entity management
            </div>
            <div><hr /></div>
            <Entity
                name="fooEntity"
                runFetchEntityOnMount={true}
                entity={fooEntity}
                fetchEntity={fetchFoo} />
            <Entity
                name="barEntity"
                entity={barEntity}
                fetchEntity={fetchBar}
                append={true} />
            <Entity
                name="failEntity"
                entity={failEntity}
                fetchEntity={fetchFail}/>
        </Flexbox>
    );
}

AjaxExample.propTypes = {
    fooEntity : React.PropTypes.object,
    barEntity : React.PropTypes.object,
    failEntity: React.PropTypes.object,
    fetchFoo  : React.PropTypes.func.isRequired,
    fetchBar  : React.PropTypes.func.isRequired,
    fetchFail : React.PropTypes.func.isRequired
};

export default connect(
    ({ model }) => ({
        fooEntity : model.fooEntity,
        barEntity : model.barEntity,
        failEntity: model.failEntity
    }),
    { fetchFoo, fetchBar, fetchFail }
)(AjaxExample);
