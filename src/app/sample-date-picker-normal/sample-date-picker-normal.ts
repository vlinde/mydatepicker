import {Component, OnInit, ViewChild} from '@angular/core';
import {MyDatePicker, IMyDpOptions, IMyDateModel, IMyInputFieldChanged, IMyCalendarViewChanged, IMyInputFocusBlur} from 'mydatepicker';

@Component({
    selector: 'sample-date-picker-normal',
    templateUrl: 'sample-date-picker-normal.html',
    moduleId: module.id,
})

export class SampleDatePickerNormal implements OnInit {

    @ViewChild('mydp') mydp: MyDatePicker;

    myDatePickerNormalOptions: IMyDpOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'dd mmm yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '210px',
        alignSelectorRight: false,
        componentDisabled: false,
        showClearDateBtn: true,
        openSelectorTopOfInput: false,
        showSelectorArrow: true,
        openSelectorOnInputClick: false,
        showWeekNumbers: false,
        highlightDates: [],
        markDates: [],
        selectorHeight: '232px',
        selectorWidth: '252px',
        allowSelectionOnlyInCurrentMonth: true
    };
    selectedDateNormal:string = '';

    selectedTextNormal: string = '';
    border: string = 'none';

    placeholderTxt:string = 'Select a date';

    dateFormats:Array<string> = new Array('dd mmm yyyy', 'yyyy-mm-dd', 'dd.mm.yyyy', 'dd/mm/yyyy', 'mm/dd/yyyy');
    selectorSizes: Array<string> = new Array('normal', 'small');

    constructor() {
        let date = new Date();
    }

    onDisableComponent(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.componentDisabled = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onEditableDateField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.editableDateField = checked;
        copy.openSelectorOnInputClick = !checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowClearDateButton(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showClearDateBtn = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowInputField(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showInputField = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onAlignSelectorRight(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.alignSelectorRight = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onOpenSelectorTopOfInput(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.openSelectorTopOfInput = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onShowSelectorArrow(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showSelectorArrow = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onChangeDateFormat(format: string) {
        let copy = this.getCopyOfOptions();
        copy.dateFormat = format;
        this.myDatePickerNormalOptions = copy;
        this.selectedDateNormal = '';
    }

    onSelectorSize(size:string) {
      let copy = this.getCopyOfOptions();
      if (size === 'normal') {
          copy.selectorHeight = '232px';
          copy.selectorWidth = '252px';
          this.myDatePickerNormalOptions = copy;
      }
      else {
          copy.selectorHeight = '200px';
          copy.selectorWidth = '220px';
          this.myDatePickerNormalOptions = copy;
      }
    }

    onShowWeekNumbers(checked: boolean) {
        let copy = this.getCopyOfOptions();
        copy.showWeekNumbers = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onMarkToday(checked: boolean): void {
        let d: Date = new Date();
        let copy = this.getCopyOfOptions();
        copy.markDates = checked ? [{dates: [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}], color: '#C30000'}] : [];
        this.myDatePickerNormalOptions = copy;
    }

    onHighlightToday(checked: boolean): void {
        let d: Date = new Date();
        let copy = this.getCopyOfOptions();
        copy.highlightDates = checked ? [{year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()}] : [];
        this.myDatePickerNormalOptions = copy;
    }

    onAllowSelectionOnlyCurrentMonth(checked: boolean): void {
        let copy = this.getCopyOfOptions();
        copy.allowSelectionOnlyInCurrentMonth = checked;
        this.myDatePickerNormalOptions = copy;
    }

    onToggleCalendar(event: any) {
        event.stopPropagation();
        this.mydp.openBtnClicked();
    }

    onClearDate(event: any) {
        event.stopPropagation();
        this.mydp.clearDate();
    }

    ngOnInit() {
        console.log('onInit(): SampleDatePickerNormal');
    }

    onDateChanged(event: IMyDateModel) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        if(event.formatted !== '') {
            this.selectedTextNormal = 'Formatted: ' + event.formatted + ' - epoc: ' + event.epoc;
            this.border = '1px solid #CCC';

            this.selectedDateNormal = event.formatted;
        }
        else {
            this.selectedTextNormal = '';
            this.border = 'none';
        }
    }

    onInputFieldChanged(event: IMyInputFieldChanged) {
        console.log('onInputFieldChanged(): Value: ', event.value, ' - dateFormat: ', event.dateFormat, ' - valid: ', event.valid);
    }

    onCalendarViewChanged(event: IMyCalendarViewChanged) {
        console.log('onCalendarViewChanged(): Year: ', event.year, ' - month: ', event.month, ' - first: ', event.first, ' - last: ', event.last);
    }

    onCalendarToggle(event: number) {
        console.log('onCalendarToggle(): Reason: ', event);
    }

    onInputFocusBlur(event: IMyInputFocusBlur) {
        console.log('onInputFocusBlur(): Reason: ', event. reason, ' - Value: ', event.value);
    }

    getCopyOfOptions(): IMyDpOptions {
        return JSON.parse(JSON.stringify(this.myDatePickerNormalOptions));
    }
}
